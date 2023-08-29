const roles = [
    "Programmer",
    "Freelancer",
    "Frontend-developer",
    "Web Developer"
];
const currentRole = document.querySelector('#role');
let roleIndex = 0;
const changeRole = () => {

    // Removing current role
    let len = currentRole.innerText.length;

    for (let i = 0; i < len; i++) {
        setTimeout(() => {
            currentRole.innerText = currentRole.innerText.slice(0, len - (i + 1))
        }, i * 100);
    }
    roleIndex++;
    roleIndex = roleIndex % roles.length;
    setTimeout(() => {
        let newRole = roles[roleIndex].length;
        for (let i = 0; i < newRole; i++) {
            setTimeout(() => {
                currentRole.innerText = roles[roleIndex].slice(0, i + 1)
            }, i * 200);
        }
    }, len * 100);
};
hamburgerOn = true;

const changeHamburgerState = (event) => {
    event.preventDefault();
    hamburgerOn = !hamburgerOn;
    // console.log(hamburgerOn);
    if (hamburgerOn) {
        let nav = document.querySelector('nav');

        let main = document.querySelector('.main').style;



        if (window.innerWidth < 900) {
            nav.style.width = '75%';
            main.width = '100%';
        }
        else {
            nav.style.width = '22%';
            main.left = '22%';
            main.width = '78%';
        }


        let items = nav.children;




        Object.keys(items).forEach(function (key) {
            // console.log(key, items[key]);

            if (key != 0) {
                setTimeout(() => {

                    items[key].style.display = 'block';
                }, 1000);
            }
            else {
                items[key].style.transform = 'translateX(0px)';
                items[key].innerHTML = '<i class="fa fa-close"></i>';
            }
        });
    }
    else {
        let nav = document.querySelector('nav');
        nav.style.width = 0;
        let main = document.querySelector('.main').style;
        main.left = 0;
        main.width = '100%';


        let items = nav.children;




        Object.keys(items).forEach(function (key) {

            if (key != 0) {
                items[key].style.display = 'none';
            }
            else {
                items[key].style.transform = 'translateX(25px)';
                items[key].innerHTML = '<i class="fa fa-bars"></i>';

            }
        });
    }
}


document.querySelector('#hamburger').addEventListener('click', changeHamburgerState);