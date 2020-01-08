const headlines = require('./headlines');
const twApi = require('./twApi');

// is used to fake a function that talks tp an API / 3rd party library
jest.mock('./twApi');

test('headlines filters out tweets that do not have exactly one link', () => {
    // fake a copy of the data getTweets should resolve
    twAPI.getTweets.mockResolvedValue([
        {
            entities: {
                urls: [
                    {
                        url: 'https://google.com'
                    }
                ]
            },
            full_text: 'mocking'
        },
        {
            entities: {
                urls: [
                    {
                        url: 'https://google.com'
                    },
                    {
                        url: 'https://google.com'
                    }
                ]
            },
            full_text: 'mocking2'
        },
        {
            entities: {},
            full_text: 'mocking3'
        }
    ]);

    return headlines().then(tweets => {
        expect(tweets.length).toBe(1);
        expect(tweets[0]).toEqual({
            text: 'mocking',
            href: 'https://google.com'
        });
    });
});
