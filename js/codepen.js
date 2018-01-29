const container = document.getElementById('codepen');

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://cpv2api.com/pens/public/juwanpetty', true);

request.onload = function() {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response);

    data = data.data;

    if (request.status >= 200 && request.status < 400) {

        data.forEach(pen => {
            // Log each pen
            let title = pen.title;
            let link = pen.link;
            let image = pen.images.small;

            const penItem = document.createElement('li');
            penItem.setAttribute('class', 'project-listitem');

            const imageLink = document.createElement('a');
            imageLink.setAttribute('href', link);
            imageLink.setAttribute('target', '_blank');

            const penImage = document.createElement('img');
            penImage.setAttribute('alt', `image for ${title}`);
            penImage.src = image;

            const detailsContainer = document.createElement('div');
            detailsContainer.setAttribute('class', 'details');

            const detailsLink = document.createElement('a');
            detailsLink.setAttribute('href', link);
            detailsLink.setAttribute('target', '_blank');

            const detailCategory = document.createElement('h3');
            detailCategory.setAttribute('class', 'category');
            detailCategory.textContent = 'personal';

            const detailTitle = document.createElement('h2');
            detailTitle.setAttribute('class', 'title');
            detailTitle.textContent = title;

            container.appendChild(penItem);

            penItem.appendChild(imageLink);
            imageLink.appendChild(penImage);

            penItem.appendChild(detailsContainer);
            detailsContainer.appendChild(detailsLink);
            detailsLink.appendChild(detailCategory);
            detailsLink.appendChild(detailTitle);

        });
        
    } else {
        console.log('error');
    }
}

// Send request
request.send();