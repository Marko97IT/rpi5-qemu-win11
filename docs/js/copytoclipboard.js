const cloneIcon = '<i class="fa-solid fa-clone"></i>';
const checkmarkIcon = '<i class="fa-solid fa-check"></i>';

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('pre code').forEach(function (codeBlock) {
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'copy-button-container';

        const button = document.createElement('button');
        button.className = 'copy-button';
        button.type = 'button';
        button.innerHTML = cloneIcon;

        button.addEventListener('click', function () {
            const text = codeBlock.innerText;
            navigator.clipboard.writeText(text).then(
                function () {
                    button.innerHTML = checkmarkIcon;
                    button.blur();
                    setTimeout(() => (button.innerHTML = cloneIcon), 3000);
                }
            );
        });

        const pre = codeBlock.parentNode;
        pre.style.position = 'relative';
        buttonContainer.appendChild(button);
        pre.insertBefore(buttonContainer, codeBlock);
    });
});