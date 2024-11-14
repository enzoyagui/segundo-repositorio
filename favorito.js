

function toggleFavorite(imgElement) {
    fetch(imgElement.src) 
        .then(response => response.text()) 
        .then(data => { 
            const parser = new DOMParser(); 
            const svgDoc = parser.parseFromString(data, "image/svg+xml"); 
            const svgElement = svgDoc.querySelector('path'); // Seleciona o elemento <path> 
            const currentColor = svgElement.getAttribute('fill'); svgElement.setAttribute('fill', currentColor === '#FFFFFF' ? '#FF0000' : '#FFFFFF'); // Alterna a cor 
            const serializedSvg = new XMLSerializer().serializeToString(svgElement.ownerDocument.documentElement); 
            const svgBlob = new Blob([serializedSvg], { type: 'image/svg+xml' }); 
            const url = URL.createObjectURL(svgBlob); 
            imgElement.src = url;
            
            // Aumenta a imagem em 5% 
            imgElement.style.transform = imgElement.style.transform === 'scale(1.15)' ? 'scale(1)' : 'scale(1.15)'; 
    }); 
} 
    
document.querySelectorAll('img[src="./img/favoritos.svg"]').forEach(img => { 
    img.addEventListener('click', function() { 
        toggleFavorite(this); 
    }); 
});