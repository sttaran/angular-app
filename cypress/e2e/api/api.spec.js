describe('API Tests', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';

    it('should get a post by id', () => {
        cy.request(`${baseUrl}/posts/1`)
            .its('status')
            .should('eq', 200);
    });

    it('should get a list of posts', () => {
        cy.request(`${baseUrl}/posts`)
            .its('status')
            .should('eq', 200);
        cy.request(`${baseUrl}/posts`)
            .its('body')
            .should('not.be.empty')
    });

    it('should create a new post', () => {
        const newPost = {
            title: 'New Post',
            body: 'This is a new post.',
            userId: 1
        };
        cy.request('POST', `${baseUrl}/posts`, newPost)
            .its('status')
            .should('eq', 201);
    });

    it('should update a post by id', () => {
        const updatedPost = {
            title: 'Updated Post',
            body: 'This post has been updated.',
            userId: 1
        };
        cy.request('PUT', `${baseUrl}/posts/1`, updatedPost)
            .its('status')
            .should('eq', 200);
    });

    it('should delete a post by id', () => {
        cy.request('DELETE', `${baseUrl}/posts/1`)
            .its('status')
            .should('eq', 200);
    });
});