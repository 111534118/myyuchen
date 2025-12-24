document.addEventListener('DOMContentLoaded', () => {
    // Hardcoded data for map markers, as required by SD.md
    const markerData = {
        '1': {
            title: '第一個休息點',
            text: '這裡是寧靜森林的第一個休息點，你可以在此稍作停留。'
        },
        '2': {
            title: '低語洞穴入口',
            text: '主線任務「尋找失落的羅盤」的目標地點。洞穴內光線昏暗，請小心前行。'
        },
        '3': {
            title: '隱藏的收藏品',
            text: '在瀑布後面，你可以找到一個稀有的收藏品：「森林之心」。'
        }
    };

    const modal = document.getElementById('info-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const closeButton = document.querySelector('.close-button');
    const markers = document.querySelectorAll('.map-marker');

    // Function to show the modal with specific content
    function showModal(markerId) {
        const data = markerData[markerId];
        if (data) {
            modalTitle.textContent = data.title;
            modalText.textContent = data.text;
            modal.style.display = 'flex';
        }
    }

    // Function to hide the modal
    function hideModal() {
        modal.style.display = 'none';
    }

    // Add click event listener to each marker
    markers.forEach(marker => {
        marker.addEventListener('click', (event) => {
            // Stop the click from bubbling up to parent elements
            event.stopPropagation(); 
            
            const markerId = marker.getAttribute('data-marker-id');
            showModal(markerId);
        });
    });

    // Add click event listener to the close button
    closeButton.addEventListener('click', hideModal);

    // Add click event listener to the modal background to close it
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });

    // Optional: Close the modal with the 'Escape' key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            hideModal();
        }
    });
});
