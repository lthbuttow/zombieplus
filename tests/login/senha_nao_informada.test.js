
module.exports = {
    
    'senha não informada': (browser) => {

        let login = browser.page.login()

        login.with('lucas@teste.com', '').expectAlertInfo('Opps. Cadê a senha?')
    }
}
