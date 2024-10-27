import song1 from "../Audios/Anuv Jain - GUL (Studio).mp3"
import song2 from "../Audios/Choo Lo.mp3"
import song3 from "../Audios/Pahadon Mein.mp3"
import song4 from "../Audios/Shaayad.mp3"
import song5 from "../Audios/Waqt Ki Baatein.mp3"

import image1 from "../Images/Anuv Jain - GUL (Studio).jpg"
import image2 from "../Images/Choo Lo.jpg"
import image3 from "../Images/Pahadon Mein.jpg"
import image4 from "../Images/Shaayad.jpg"
import image5 from "../Images/Waqt Ki Baatein.jpg"


export default function audios() {


    let songs = [
        {
            id: 0,
            title: "Anuv Jain - GUL (Studio)",
            artist: "Anuv Jain",
            image: image1,
            audio: song1

        },
        {
            id: 1,
            title: "Choo Lo",
            artist: "The Local Train",
            image: image2,
            audio: song2

        },
        {
            id: 2,
            title: "Pahadon Mein",
            artist: "Salman Elahi",
            image: image3,
            audio: song3
        },
        {
            id: 3,
            title: "Shaayad",
            artist: "Taba Chake",
            image: image4,
            audio: song4

        },
        {
            id: 4,
            title: "Waqt Ki Baatein",
            artist: "Dream Note",
            image: image5,
            audio: song5

        }
    ]

    return songs;


}
