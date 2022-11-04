import qs from 'query-string';
import { ITask, IUser } from '../interfaces/data.interfaces';

// TODO: Move to const file
export const DOMAIN = 'http://localhost:3001';

type TConfigPerform = { method: string };
type TPromiseData = IUser | ITask;

// TODO; change class to function and update type
class ApiCall {
  domain: string;

  constructor(domain: string) {
    this.domain = domain;
  }

  // data = tasks[]
  async perform(url: string, data?: ITask | null, config?: TConfigPerform): Promise<TPromiseData> {
    const request = await fetch(`${this.domain}/${url}`, {
      ...config,
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    });

    const resultRequest = await request.json();

    return resultRequest;
  }

  async get(path: string, searchParams = {}): Promise<TPromiseData> {
    const resultRequest = await this.perform(`${path}?${qs.stringify(searchParams)}`);

    return resultRequest;
  }

  async post(path: string, playload: ITask): Promise<TPromiseData> {
    const resultRequest = await this.perform(path, playload, {
      method: 'POST',
    });

    return resultRequest;
  }

  async put(path: string, playload: ITask): Promise<TPromiseData> {
    const resultRequest = await this.perform(path, playload, {
      method: 'PUT',
    });

    return resultRequest;
  }

  async delete(path: string): Promise<TPromiseData> {
    const resultRequest = await this.perform(path, null, {
      method: 'DELETE',
    });

    return resultRequest;
  }
}

export default new ApiCall(DOMAIN);
