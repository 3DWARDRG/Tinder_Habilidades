import { client } from '../../DataBaseInfo.js'

client.connect()

export const getUsers = async (req, res)=>{
    const response= await client.query('SELECT * FROM "Usuarios"."Usuario"');
    res.json(response.rows)
}

export const getUserById = async (req, res)=>{

    try {
        const response= await client.query(`SELECT * FROM "Usuarios"."Usuario" WHERE "ID Usuario"=${req.params.id}`);
        res.json(response.rows)

    } catch (error) {
        res.send("error"+ error)
    }
}


export const postUsers = async (req, res)=>{
    try {
        const {nameUser, passwordUser, IdentificacionUser, EmailUser, CellPhoneUser, rateUser} = req.body;
        const response= await client.query(`INSERT INTO "Usuarios"."Usuario"("Nombre", "Contraseña", "Numero de identidad", "Email", "Celular", "Tarifa") 
        VALUES ('${nameUser}', '${passwordUser}', ${IdentificacionUser}, '${EmailUser}', ${CellPhoneUser}, ${rateUser});`);
        res.send('user Created!' + req.body);

    } catch (error) {
        res.send("error"+ error)
    }
}

export const putUsers = async(req, res)=>{
    try {
        let consult;
        const {nameUser, passwordUser, IdentificacionUser, EmailUser, CellPhoneUser, rateUser} = req.body;

        if(nameUser !== undefined){
            consult = `"Nombre"= '${nameUser}' `;
        }
        if(passwordUser !== undefined){
            consult += `"Contraseña"='${passwordUser}'`;
        }
        if(IdentificacionUser !== undefined){
            consult += `"Numero de identidad"= '${IdentificacionUser}'`;
        }
        if(EmailUser !== undefined){
            consult += `"Email"= '${EmailUser}'`;
        }
        if(CellPhoneUser !== undefined){
            consult += `"Celular"= ${CellPhoneUser}`;
        }
        if(rateUser !== undefined){
            consult += `"Tarifa"=${rateUser}`;
        } 

        const response= await client.query(`UPDATE "Usuarios"."Usuario" SET ${consult} WHERE "ID Usuario"= ${req.params.id}`);
        console.log(response)

        res.send('user UPDATE!');

    } catch (error) {
        res.send("error "+ error + " " + error.body)
    }
}

export const deleteUser = async (req, res)=>{

        try {
            const response= await client.query(`DELETE FROM "Usuarios"."Usuario" WHERE "ID Usuario"=${req.params.id}`);
            res.json(response.rows + "user DELETE!")
    
        } catch (error) {
            res.send("error"+ error)
        }

}

