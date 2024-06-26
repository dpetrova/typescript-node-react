import axios, { AxiosPromise, AxiosResponse } from "axios";

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  /* fetch data about a particular record from the server */
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  /* save data about this record to the server */
  save(data: T): AxiosPromise {
    const { id } = data;

    // put
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    }
    // post
    else {
      return axios.post(this.rootUrl, data);
    }
  }
}
