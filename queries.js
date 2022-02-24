// Task 12a
const { User, Post, sequelize, Sequelize: { Op } } = require('./models');

// Task 12b
async function createUser(name, faveBread, email, password) {
    const user = await User.create({
        name,
        faveBread,
        email,
        password
    })

    console.log(user.name)

    sequelize.close()
};

// createUser('ray', 'garlic bread', 'ray@ray.ray', 'garlicbreadisbest1')

// Task 12c
async function buildPost(title, content, userId, subId) {
    const post = Post.build({
        title,
        content,
        userId,
        subId
    })

    await post.save()

    console.log(post.content)

    sequelize.close()
}

buildPost('This is a good post', 'this is a post that is totaly a valubale addition to this website', 5, 1)