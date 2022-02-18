const share = document.querySelector(".share");
const shareCard = document.getElementById("share-card");

const profileLeft = document.querySelector(".profile-left");

share.addEventListener("mouseover", () => {
	if (window.innerWidth <= 600) {
		profileLeft.classList.add("profile-left-inactive");
	}
	shareCard.classList.remove("inactive");
	shareCard.classList.add("active");
});

share.addEventListener("mouseout", () => {
	profileLeft.classList.remove("profile-left-inactive");
	shareCard.classList.remove("active");
	shareCard.classList.add("inactive");
});
