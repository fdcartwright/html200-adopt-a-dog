
const blogData = [
    {
        imageSrc: '/html200-adopt-a-dog/images/blog-1.jpg',
        imageAlt: 'Photo of a man hugging a golden dog',
        title: 'Traveling With Your Dog',
        content: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. <br> <br>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
    },
    {
        imageSrc: '/html200-adopt-a-dog/images/blog-2.jpg',
        imageAlt: 'Photo of a man hugging a golden dog',
        title: 'How To Walk Multiple Dogs',
        content: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. <br> <br>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
    },
    {
        imageSrc: '/html200-adopt-a-dog/images/blog-3.jpg',
        imageAlt: 'Photo of a man hugging a golden dog',
        title: 'Teach Your Dog To Fetch!',
        content: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. <br> <br>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
    }
];


for (let i = 0; i < blogData.length; i++) {
    
const blogContainer = document.getElementsByClassName('blog-container');
const mainSection = document.createElement('div');
mainSection.classList.add('main-section');
blogContainer[0].appendChild(mainSection)

const sectionImage = document.createElement('div');
sectionImage.classList.add('section-image');
const img = document.createElement('img');
img.setAttribute('src', blogData[i].imageSrc);
img.setAttribute('alt', blogData[i].imageAlt);

mainSection.appendChild(sectionImage);
sectionImage.appendChild(img);

const sectionContent = document.createElement('div');
sectionContent.classList.add('blog-section-content');
mainSection.appendChild(sectionContent);

const contentTitle = document.createElement('h1');
contentTitle.innerHTML = blogData[i].title;
sectionContent.appendChild(contentTitle);

const contentDetails = document.createElement('p');
contentDetails.innerHTML = blogData[i].content;
sectionContent.appendChild(contentDetails);
};