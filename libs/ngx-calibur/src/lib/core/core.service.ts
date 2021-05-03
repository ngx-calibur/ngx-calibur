import { Injectable } from '@angular/core';

@Injectable()
export class ExcaliburCoreService {

  id = 0;

  private generateId() {
    ++this.id;
    return this.id.toString();
  }

  useId(): string {
    return this.generateId();
  }

}
