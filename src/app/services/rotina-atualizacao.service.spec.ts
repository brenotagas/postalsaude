import { TestBed } from '@angular/core/testing';

import { RotinaAtualizacaoService } from './rotina-atualizacao.service';

describe('RotinaAtualizacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RotinaAtualizacaoService = TestBed.get(RotinaAtualizacaoService);
    expect(service).toBeTruthy();
  });
});
