
import cloudinary from 'cloudinary'
import axios from "axios";

import uploadImage from "@/modules/daybook/helpers/uploadImage";


cloudinary.config({
    cloud_name: 'dkw8rk60n',
    api_key: '773642287588644',
    api_secret: '9w-3B87I7Ur5DutDBDfKGnkkhNg',
})


describe('Pruebas en el uploadImage',()=>{
    test('Debe de cargar un archivp y retornar el url',async(done)=>{

        const {data} = await axios.get('https://res.cloudinary.com/dkw8rk60n/image/upload/v1656018695/wsavulzmuv3d9xv3tu23.jpg', {
            responseType: 'arraybuffer'
        })

        const file = new File ([data],'foto.jpg')


        const url = await uploadImage(file)

        expect(typeof url).toBe('string')

        //Tomar el ID
        const segments = url.split('/')
        const imageId = segments (segments.length -1).replace('.jpg','')
        cloudinary.v2.api.delete_all_resources(imageId, {}, ()=>{
            done()
        })


    })
})
