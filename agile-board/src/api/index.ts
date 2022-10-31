/* eslint-disable no-return-await */
// 👇️ ts-nocheck ignores all ts errors in the file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import qs from 'query-string';

// TODO: Move to const file
export const DOMAIN = 'http://localhost:3001';

// TODO; change class to function and update type
class ApiCall {
  constructor(domain) {
    this.domain = domain;
  }

  async perform(url, data, config): any {
    const request = await fetch(`${this.domain}/${url}`, {
      ...config,
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    });

    return await request.json();
  }

  async get(path, searchParams = {}): any {
    return await this.perform(`${path}?${qs.stringify(searchParams)}`);
  }

  async post(path, playload): any {
    return await this.perform(path, playload, {
      method: 'POST',
    });
  }

  async put(path, playload): any {
    return await this.perform(path, playload, {
      method: 'PUT',
    });
  }

  async delete(path): any {
    return await this.perform(path, null, {
      method: 'DELETE',
    });
  }
}

export default new ApiCall(DOMAIN);
