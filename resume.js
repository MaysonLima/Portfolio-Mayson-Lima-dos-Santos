// Resume page behavior.
(function(){
    function syncResume(lang){
        const allTranslations = window.portfolioTranslations;
        if(!allTranslations || !allTranslations[lang]) return;

        const data = allTranslations[lang];
        const resumeEyebrow = document.getElementById('resumeEyebrow');
        const resumeIntro = document.getElementById('resumeIntro');
        const resumeDownload = document.getElementById('resumeDownload');
        const resumeOpen = document.getElementById('resumeOpen');

        if(resumeEyebrow) resumeEyebrow.textContent = data.resumeEyebrow;
        if(resumeIntro) resumeIntro.textContent = data.resumeIntro;
        if(resumeDownload) {
            resumeDownload.textContent = data.resumeDownload;
            if(data.resumeFile) {
                resumeDownload.href = data.resumeFile;
                resumeDownload.download = data.resumeFile;
            }
        }
        if(resumeOpen) {
            resumeOpen.textContent = data.resumeOpen;
            if(data.resumeFile) {
                resumeOpen.href = data.resumeFile;
            }
        }

        document.querySelectorAll('.resume_preview').forEach((img, index) => {
            const nextImage = data.resumeImages && data.resumeImages[index];
            if(nextImage){
                img.src = nextImage.src;
                img.alt = nextImage.alt;
            }
        });
    }

    window.addEventListener('portfolio:languagechange', (event) => {
        syncResume(event.detail.lang);
    });

    syncResume(document.body.dataset.lang === 'en' ? 'en' : 'pt');
})();
