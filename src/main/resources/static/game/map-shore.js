document.addEventListener('DOMContentLoaded', () => {
    const markerData = {
        '1': { title: '海岸 標記 1', text: '這是標記 1 的描述。' },
        '2': { title: '海岸 標記 2', text: '這是標記 2 的描述。' },
        '3': { title: '海岸 標記 3', text: '這是標記 3 的描述。' },
        '4': { title: '海岸 標記 4', text: '這是標記 4 的描述。' },
        '5': { title: '海岸 標記 5', text: '這是標記 5 的描述。' },
        '6': { title: '海岸 標記 6', text: '這是標記 6 的描述。' },
        '7': { title: '海岸 標記 7', text: '這是標記 7 的描述。' },
        '8': { title: '海岸 標記 8', text: '這是標記 8 的描述。' },
        '9': { title: '海岸 標記 9', text: '這是標記 9 的描述。' },
        '10': { title: '海岸 標記 10', text: '這是標記 10 的描述。' }
    };

    const modal = document.getElementById('info-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const closeButton = document.querySelector('.close-button');
    const markers = document.querySelectorAll('.map-marker');

    function showModal(markerId) {
        const data = markerData[markerId];
        if (data) {
            modalTitle.textContent = data.title;
            modalText.textContent = data.text;
            modal.style.display = 'flex';
        }
    }

    function hideModal() {
        modal.style.display = 'none';
    }

    markers.forEach(marker => {
        marker.addEventListener('click', (event) => {
            event.stopPropagation(); 
            const markerId = marker.getAttribute('data-marker-id');
            showModal(markerId);
        });
    });

    closeButton.addEventListener('click', hideModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            hideModal();
        }
    });
});