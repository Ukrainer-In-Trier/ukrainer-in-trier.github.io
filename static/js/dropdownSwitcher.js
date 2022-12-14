const dropdownSwitcherList = document.querySelectorAll('.dropdown-switcher');

dropdownSwitcherList.forEach((element) => {
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
    const contentDropdown = element.parentElement.querySelector('.content-dropdown');
  
    if (contentDropdown.classList.contains('hidden')) {
      document.querySelectorAll('.content-dropdown').forEach((item) => item.classList.add('hidden'));
      contentDropdown.classList.remove('hidden');
      contentDropdown.classList.add('flex');
    } else {
      contentDropdown.classList.add('hidden');
      contentDropdown.classList.remove('flex');
    }
   });
  });


