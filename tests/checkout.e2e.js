describe('Fluxo de compra iOS', () => {

  it('Deve concluir checkout com sucesso', async () => {

    const email = await $('~email')
    await email.setValue('admin@admin.com')

    const senha = await $('~password')
    await senha.setValue('admin123')

    const botaoLogin = await $('~login')
    await botaoLogin.click()

    const browse = await $('~Browse')
    await browse.click()

    const produto = await $('~Sauce Labs Backpack')
    await produto.click()

    const addCart = await $('~Add To Cart button')
    await addCart.click()

    const cart = await $('~tab bar option cart')
    await cart.click()

    const checkout = await $('~Proceed To Checkout button')
    await checkout.click()

    const fullname = await $('~Full Name* input field')
    await fullname.setValue('Joao Pedro')

    const address = await $('~Address Line 1* input field')
    await address.setValue('Rua Teste')

    const city = await $('~City* input field')
    await city.setValue('Joacaba')

    const zip = await $('~Zip Code* input field')
    await zip.setValue('89600000')

    const country = await $('~Country* input field')
    await country.setValue('Brasil')

    const payment = await $('~To Payment button')
    await payment.click()

    const review = await $('~Review Order button')
    await review.click()

    const placeOrder = await $('~Place Order button')
    await placeOrder.click()
  })
})