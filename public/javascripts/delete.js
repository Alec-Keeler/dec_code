console.log('hello from front end js')
// Task 38
const deleteBtns = document.querySelectorAll('.delete-btn')

for (let i = 0; i < deleteBtns.length; i++) {
    const btn = deleteBtns[i];
    btn.addEventListener('click', async(e) => {
        const postId = e.target.id.split('-')[2]
        // console.log(postId)
        const res = await fetch(`/posts/${postId}`, {
            method: 'DELETE'
        })

        const data = await res.json()
        if (data.message === "Success") {
            const container = document.getElementById(`post-container-${postId}`)
            container.remove()
        } else {
            // append some element that just displays the error message
        }
    })
}