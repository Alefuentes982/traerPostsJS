async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        document.getElementById('post-data').innerHTML = '';

        const postList = document.createElement('ul');
        data.forEach(post => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
          <strong>ID usuario:</strong> ${post.userId}<br>
          <strong>ID post:</strong> ${post.id}<br>
          <strong>Titulo:</strong> ${post.title}<br>
          <strong>Post:</strong> ${post.body}<br><br>
        `;
            postList.appendChild(listItem);
        });

        document.getElementById('post-data').appendChild(postList);
    } catch (error) {
        console.error('Hubo un error al obtener los posts:', error);
    }
}