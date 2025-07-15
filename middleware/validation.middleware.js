export const validateRequest = (req, res, next) => {
    const { name, price, imageUrl } = product;
    let errors = [];
    if (name.trim() == '' || !name) {
        errors.push('Name is required');
    }

    if (parseFloat(price) < 1 || !price) {
        errors.push('Price must be positive and greater than 0');
    }

    try {
        const validURL = new URL(imageUrl);
    } catch (error) {
        errors.push('URL is invalid');
    }

    if (errors.length > 0) {
        return res.render('new-product.ejs', {
            errorMessage: errors[0]
        });
    }
}