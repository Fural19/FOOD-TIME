function orderFood(foodName, price) {

    const phoneNumber = "923001234567";

    const message =
        `Assalamualaikum Food Time!%0A%0A` +
        `I would like to place an order:%0A%0A` +
        `🍽️ Item: ${foodName}%0A` +
        `💰 Price: Rs. ${price}%0A%0A` +
        `Please confirm my order. Thank you!`;

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
}