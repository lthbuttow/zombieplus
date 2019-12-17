
module.exports = {
    '@tags': ['smoke'],

    'login com sucesso': (browser) => {

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()
        
        login.with('zumbi@dospalmares.com', 'pwd123')

        sidebar.expectLoggedUser('Quilombo')
    }
}
