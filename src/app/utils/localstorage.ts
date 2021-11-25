import { md5 } from '@dikman/md5';

export class LocalStorageUtils {

    public obterApiKey() {
        return JSON.parse(localStorage.getItem('apikey'))
    }
    
    public obterHash() {
        return JSON.parse(localStorage.getItem('hash'))
    }

    private removerCredenciais(){
        localStorage.removeItem('apikey');
        localStorage.removeItem('hash');
    }

    public salvarApiKey(dados: any) {
        this.removerCredenciais();

        localStorage.setItem('apikey', dados.public_key);

        this.salvarHash(dados);
    }

    private salvarHash(dados: any) {

        //CRIPTOGRAFAR MD5
        let variaveis = '1' + dados.private_key + this.obterApiKey();;
        let hash = md5(variaveis);
        localStorage.setItem('hash', hash);
    }
}