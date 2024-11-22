


export const fileUpload = async( file ) => {
    if ( !file ) throw new Error('No se pudo cargar el archivo');

    const cloudUrl = `https://api.cloudinary.com/v1_1/dawjomov5/upload`;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'react-journal');

    try {

        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( !resp.ok ) throw new Error('No se pudo cargar el archivo');

        const cloudResp = await resp.json();

        return cloudResp.secure_url;
        
    } catch ( error ) {
        console.log( error )
        throw new Error(error.message);
    }

}
