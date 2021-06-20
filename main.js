const pars = document.querySelectorAll('p');
const arrows = document.querySelectorAll('.itemImg');

const text = [
    {
        p: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
    },
    {
        p: 'No more than 2GB. All files in your account must fit your allotted storage space.'
    },
    {
        p: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
    },
    {
        p: 'Yes! Send us a message and we’ll process your request no questions asked.'
    },
    {
        p: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
    },
]


function logText(e) {
   console.log(e.value);
}

arrows.forEach(arrow => {
    arrow.addEventListener('click', (e) => {
        let itemEl = e.target.parentElement.parentElement;
        console.log(itemEl);
        itemEl.classList.toggle('active');
    })
})
