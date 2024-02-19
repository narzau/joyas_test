import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes, deleteObject, uploadString, getBytes } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBlnkMWrukpyVDNz_5m45pko9c6N5qpqmU",
  authDomain: "felicejoyas.firebaseapp.com",
  projectId: "felicejoyas",
  storageBucket: "felicejoyas.appspot.com",
  messagingSenderId: "901550850171",
  appId: "1:901550850171:web:629ef856fea85ca91862de"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFiles(file, name) {
    const storageRef = ref(storage, name)
    await uploadBytes(storageRef, file).then(snapshot => {
    })
}

export async function showImg(name) {
  const storageRef = ref(storage, name);
  return await getDownloadURL(storageRef)
}

export async function deleteFile(name) {
  const desertRef = ref(storage, name);
  deleteObject(desertRef)
}


export async function changeName(url, newName) {
  const preRef = ref(storage, url)
  const postRef = ref(storage, newName)
  const file = await getBytes(preRef)
      await uploadBytes(postRef, file);
}
