import moxios from 'moxios';
import {getSecretWord} from './'

describe('get secret word',() =>{
    beforeEach(() =>{
        moxios.install();
    });
    afterEach(() =>{
        moxios.uninstall();
    });

    test('secretWord',() =>{
        moxios.wait(() =>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,response:'party',
            });
        });

        //update in redux
        return getSecretWord()
        .then((secretWord) =>{
            expect(secretWord).toBe('party');
        })

    });
});