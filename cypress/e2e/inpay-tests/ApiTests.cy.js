import {httpsRequests} from "/Users/pepp/Desktop/inpay-interview/requests/HttpRequests";

describe('Inpay api interview tests', () => {
    it('Deck test', () => {
        httpsRequests.createDeck();
        httpsRequests.shuffleDeck()
        httpsRequests.drawCardFromDeck(3);
        httpsRequests.addToPile('FIRST_PILE', 'AD,7H,QD,8D,9H');
        httpsRequests.addToPile('SECOND_PILE', 'AS,7D,QH,8S,9D');
        httpsRequests.shuffleThePile('FIRST_PILE');
        httpsRequests.drawCardsFromPile('FIRST_PILE', 0);
        httpsRequests.drawCardsFromPile('SECOND_PILE', 0);
    });
})