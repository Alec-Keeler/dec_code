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
            // send a PATCH fetch request with the content in the body
            // await the response
            // if we get a Success response, the original post element should be updated
            // reapply hidden class to form
        })
    })
}