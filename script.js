//your JS code here. If required.
function checkOrientation() {
            if (window.matchMedia("(orientation: landscape)").matches) {
                document.body.style.backgroundImage = 'url("https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg")';
            } else {
                document.body.style.backgroundImage = 'url("https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg")';
            }
        }

        // Listen for screen orientation changes
        window.addEventListener("resize", checkOrientation);
        
        // Initial check
        checkOrientation();