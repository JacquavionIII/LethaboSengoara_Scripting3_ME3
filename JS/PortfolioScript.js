document.addEventListener('DOMContentLoaded', () => 
{
  const artworks = document.querySelectorAll('.artwork');
  const detailsCard = document.getElementById('artworkDetails');
  const titleElem = document.getElementById('detailsTitle');
  const descElem = document.getElementById('detailsDescription');
  const closeBtn = document.getElementById('closeDetails');

  let lastClicked = null;

    artworks.forEach(img => 
    {
        img.addEventListener('click', () => 
        {
            const isSame = lastClicked === img;

            if (isSame && !detailsCard.classList.contains('hidden')) 
                {
                    detailsCard.classList.add('hidden');
                    lastClicked = null;
                    return;
                }

            const title = img.dataset.title;
            const description = img.dataset.description;

            titleElem.textContent = title;
            descElem.textContent = description;

            if (window.innerWidth <= 768) 
                {
                // Float in center, no DOM move
                detailsCard.style.top = `${window.scrollY + window.innerHeight / 2}px`;
                }

            detailsCard.classList.remove('hidden');
            lastClicked = img;
        });
    });

    closeBtn.addEventListener('click', () => 
    {
        detailsCard.classList.add('hidden');
        lastClicked = null;
    });
});