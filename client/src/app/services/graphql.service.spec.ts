import { TestBed, inject } from '@angular/core/testing';
import { GraphqlService } from './graphql.service';
import {ApolloBoostModule} from 'apollo-angular-boost';
import {HttpLinkModule} from 'apollo-angular-link-http';
import {HttpClientModule} from '@angular/common/http';

describe('GraphqlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphqlService],
      imports: [
        HttpClientModule,
        HttpLinkModule,
        ApolloBoostModule
      ]
    });
  });

  it('should be created', inject([GraphqlService], (service: GraphqlService) => {
    expect(service).toBeTruthy();
  }));
});
