let playButton = document.getElementById('honk-btn');
let audioVolumeNumber = document.getElementById('volume-number');
let audioVolumeSlider = document.getElementById('volume-slider');
let audioSource = document.getElementById('horn-sound');

audioVolumeSlider.addEventListener("input", updateNumber);
audioVolumeNumber.addEventListener("input", updateSlider);
playButton.addEventListener("click", playSound);
playButton.setAttribute("type", "button");

//alert(document.querySelector("#audio-selection").querySelectorAll("input"));
document.getElementById("radio-car-horn").addEventListener("change", carHornChange);
document.getElementById("radio-air-horn").addEventListener("change", airHornChange);
document.getElementById("radio-party-horn").addEventListener("change", partyHornChange);

function carHornChange()
{
    audioSource.setAttribute("src", "./assets/media/audio/car-horn.mp3");
    document.getElementById("sound-image").setAttribute("src", "./assets/media/images/car.svg");
}

function airHornChange()
{
    audioSource.setAttribute("src", "./assets/media/audio/air-horn.mp3");
    document.getElementById("sound-image").setAttribute("src", "./assets/media/images/air-horn.svg");
}

function partyHornChange()
{
    audioSource.setAttribute("src", "./assets/media/audio/party-horn.mp3");
    document.getElementById("sound-image").setAttribute("src", "./assets/media/images/party-horn.svg");
}

function playSound()
{ 
    audioSource.volume = audioVolumeNumber.value/100;
    audioSource.play();
}

function updateSlider()
{
    let volume = audioVolumeNumber.value;

    audioVolumeSlider.value = volume;
    updateVolumeIcon(volume);

    if(volume == 0)
        playButton.disabled = true;
    else
        playButton.disabled = false;
}

function updateNumber()
{
    let volume = audioVolumeSlider.value;

    audioVolumeNumber.value = volume;
    updateVolumeIcon(volume);
    if(volume == 0)
        playButton.disabled = true;
    else
        playButton.disabled = false;
}

function updateVolumeIcon(volume)
{
    let volumeIcon = document.getElementById('volume-image');
    const SOURCEPREFIX ="./assets/media/icons/";

    if(volume == 0)
    {
        volumeIcon.setAttribute("src", SOURCEPREFIX + "volume-level-0.svg")
    } else if(volume >= 1 && volume <= 33)
    {
        volumeIcon.setAttribute("src", SOURCEPREFIX + "volume-level-1.svg")
    } else if(volume >= 34 && volume <= 66)
    {
        volumeIcon.setAttribute("src", SOURCEPREFIX + "volume-level-2.svg")
    } else
    {
        volumeIcon.setAttribute("src", SOURCEPREFIX + "volume-level-3.svg")
    }
}