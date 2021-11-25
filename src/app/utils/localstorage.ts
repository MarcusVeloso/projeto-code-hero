import { md5 } from '@dikman/md5';

export class LocalStorageUtils {

    public obterApiKey() {
        return localStorage.getItem('apikey');
    }
    
    public obterHash() {
        return localStorage.getItem('hash');
    }

    private removerCredenciais(){
        localStorage.removeItem('apikey');
        localStorage.removeItem('hash');
    }

    public salvarCredenciais(dados: any) {
        this.removerCredenciais();

        localStorage.setItem('apikey', dados.chave_publica);

        this.salvarHash(dados);
    }

    private salvarHash(dados: any) {

        //CRIPTOGRAFAR MD5
        let variaveis = '1' + dados.chave_privada + this.obterApiKey();;
        let hash = md5(variaveis);
        localStorage.setItem('hash', hash);
    }
}