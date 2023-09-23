import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, where } from 'firebase/firestore/lite';
import {defineStore} from 'pinia'
import {db} from '../firebaseConfig'
import {auth} from '../firebaseConfig'
import {nanoid} from 'nanoid'

export const useDatabaseStore=defineStore('database',{
    state: () => ({
       
            documents: [],
            loadingDoc:false
        
    }),
    actions : {
        async getUrls(){
            this.loadingDoc=true
            // if(this.documents.length!==0){
            //     return;
            // }
            try {
                const q=query(collection(db,'urls'),where("user","==",auth.currentUser.uid));
                const querySnapshot=await getDocs(q);
                querySnapshot.forEach(doc=>{
                    //console.log(doc.id,doc.data());
                    this.documents.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
            } catch (error) {
                console.log(error);
            }finally{
                this.loadingDoc=false
            }
        },
        async addUrl(name){
            try {
                const objetoDoc={
                    name,
                    short:nanoid(6),
                    user:auth.currentUser.uid
                }
               const docRef= await addDoc(collection(db,'urls'),objetoDoc) ;
            //    console.log(docRef);
            this.documents.push({
                ...objetoDoc,
                id: docRef.id
            })
            } catch (error) {
                console.log(error);
            }finally{

            }
        },
        async deleteUrl(id){
            try {
                const docRef= doc(db,"urls",id);

                const docSnap=await getDoc(docRef);
                if(!docSnap.exists()){
                    throw new Error(" No existe el doc")
                }
                if(docSnap.data().user!==auth.currentUser.uid){
                    throw new Error(" No le pertenece ese documento")
                }

                await deleteDoc(docRef);
                this.documents=this.documents.filter(item=>item.id!==id);
            } catch (error) {
                console.log(error);
            }finally{

            }
        }
    }
})