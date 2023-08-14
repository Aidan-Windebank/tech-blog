
const replyButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const updateId = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${updateId}`, {
      // method: 'UPDATE',
      
    });
    console.log(response)
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to update post');
    }
  }
}


document
.querySelector('#reply_button')
.addEventListener('click', replyButtonHandler);
