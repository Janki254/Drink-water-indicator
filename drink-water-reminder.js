const smallcups = document.querySelectorAll('.cup-small');
const remained = document.getElementById('remained');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');

const updateQtyOfWater = () => {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallcups.length;

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups *300}px`;
        percentage.innerText = `${(fullCups / totalCups) * 100}%`;
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
    }
};

updateQtyOfWater();

smallcups.forEach((cup, indx) => {
    cup.addEventListener('click', () => {
        highlightCups(indx);
    });
});

const highlightCups = (indx) => {
    if (indx === 7 && smallcups[indx].classList.contains('full')) {
        indx--;
    } else if (
        smallcups[indx].classList.contains('full') &&
        !smallcups[indx].nextElementSibling.classList.contains('full')
    ) {
        indx--;
    }

    smallcups.forEach((cup, idx2) => {
        if (idx2 <= indx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });

    updateQtyOfWater();
};
