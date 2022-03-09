console.log('hello from edit')

const editBtns = document.querySelectorAll('.edit-btn')

for (let i = 0; i < editBtns.length; i++) {
    const btn = editBtns[i];
    btn.addEventListener('click', (e) => {
        const postId = e.target.id.split('-')[2]
        const form = document.getElementById(`edit-form-${postId}`)
        if (form.classList.contains('hidden')) {
            form.classList.remove('hidden')
        } else {
            form.classList.add('hidden')
        }

        const submitBtn = document.getElementById(`edit-btn-${postId}`)
        submitBtn.addEventListener('click', async(subEvent) => {
            subEvent.preventDefault()
            console.log('submit', postId)

            // query the dom for the input field's value
            const contentData = document.getElementById(`content-field-${postId}`).value

            // send a PATCH fetch request with the content in the body
            const res = await fetch(`/posts/${postId}`, {
                method: 'PATCH',
                body: JSON.stringify({content: contentData}),
                headers: { 'Content-Type': 'application/json' }
            })
            // await the response
            const returnData = await res.json()
            // if we get a Success response, the original post element should be updated
            if (returnData.message === "Success") {
                const postEle = document.getElementById(`post-content-${postId}`)
                postEle.innerHTML = returnData.post.content
                // reapply hidden class to form
                form.classList.add('hidden')
            }
        })
    })
}