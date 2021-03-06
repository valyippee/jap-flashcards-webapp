package com.valerie.demo.repositories;

import com.valerie.demo.domain.Set;
import org.springframework.data.repository.CrudRepository;

public interface SetRepository  extends CrudRepository<Set, Long> {
}
