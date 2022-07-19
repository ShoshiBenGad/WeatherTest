import IMG1 from '../../../assets/images/IMG1.png';
import IMG2 from '../../../assets/images/IMG2.png';
import IMG3 from '../../../assets/images/IMG3.png';
import IMG4 from '../../../assets/images/IMG4.png';
import IMG5 from '../../../assets/images/IMG5.png';
import IMG6 from '../../../assets/images/IMG6.png';
import IMG7 from '../../../assets/images/IMG7.png';
import IMG8 from '../../../assets/images/IMG8.png';
import IMG11 from '../../../assets/images/IMG11.png';
import IMG12 from '../../../assets/images/IMG12.png';
import IMG13 from '../../../assets/images/IMG13.png';
import IMG14 from '../../../assets/images/IMG14.png';
import IMG15 from '../../../assets/images/IMG15.png';
import IMG16 from '../../../assets/images/IMG16.png';
import IMG17 from '../../../assets/images/IMG17.png';
import IMG18 from '../../../assets/images/IMG18.png';
import IMG19 from '../../../assets/images/IMG19.png';
import IMG20 from '../../../assets/images/IMG20.png';
import IMG21 from '../../../assets/images/IMG21.png';
import IMG22 from '../../../assets/images/IMG22.png';
import IMG23 from '../../../assets/images/IMG23.png';
import IMG24 from '../../../assets/images/IMG24.png';
import IMG25 from '../../../assets/images/IMG25.png';
import IMG26 from '../../../assets/images/IMG26.png';
import IMG29 from '../../../assets/images/IMG29.png';
import IMG30 from '../../../assets/images/IMG30.png';
import IMG31 from '../../../assets/images/IMG31.png';
import IMG32 from '../../../assets/images/IMG32.png';
import IMG33 from '../../../assets/images/IMG33.png';
import IMG34 from '../../../assets/images/IMG34.png';
import IMG35 from '../../../assets/images/IMG35.png';
import IMG36 from '../../../assets/images/IMG36.png';
import IMG37 from '../../../assets/images/IMG37.png';
import IMG38 from '../../../assets/images/IMG38.png';
import IMG39 from '../../../assets/images/IMG39.png';
import IMG40 from '../../../assets/images/IMG40.png';
import IMG41 from '../../../assets/images/IMG41.png';
import IMG42 from '../../../assets/images/IMG42.png';
import IMG43 from '../../../assets/images/IMG43.png';
import IMG44 from '../../../assets/images/IMG44.png';


const images = [
    {id : 1 ,img : IMG1 } ,
    {id : 2 ,img : IMG2 },
    {id : 3 ,img : IMG3 },
    {id : 4 ,img : IMG4 },
    {id : 5 ,img : IMG5 },
    {id : 6 ,img : IMG6 },
    {id : 7 ,img : IMG7 },
    {id : 8 ,img : IMG8 },
    {id : 11 ,img : IMG11 },
    {id : 12 ,img : IMG12 },
    {id : 13 ,img : IMG13 },
    {id : 14 ,img : IMG14 },
    {id : 15 ,img : IMG15 },
    {id : 16 ,img : IMG16 },
    {id : 17 ,img : IMG17 },
    {id : 18 ,img : IMG18 },
    {id : 19 ,img : IMG19 },
    {id : 20 ,img : IMG20 },
    {id : 21 ,img : IMG21 },
    {id : 22 ,img : IMG22 },
    {id : 23 ,img : IMG23 },
    {id : 24 ,img : IMG24 },
    {id : 25 ,img : IMG25 },
    {id : 26 ,img : IMG26 },
    {id : 29 ,img : IMG29 },
    {id : 30 ,img : IMG30 },
    {id : 31 ,img : IMG31 },
    {id : 32 ,img : IMG32 },
    {id : 33 ,img : IMG33 },
    {id : 34 ,img : IMG34 },
    {id : 35 ,img : IMG35 },
    {id : 36 ,img : IMG36 },
    {id : 37 ,img : IMG37 },
    {id : 38 ,img : IMG38 },
    {id : 39 ,img : IMG39 },
    {id : 40 ,img : IMG40 },
    {id : 41 ,img : IMG41 },
    {id : 42 ,img : IMG42 },
    {id : 43 ,img : IMG43 },
    {id : 44 ,img : IMG44 }
];

export const getImageById = (imgID) => images.find( img=> img.id == imgID)?.img;