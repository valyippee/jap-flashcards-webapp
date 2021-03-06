package com.harukoma.controllers;


import com.harukoma.domain.Card;
import com.harukoma.domain.Set;
import com.harukoma.repositories.CardRepository;
import com.harukoma.repositories.SetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin("*")
public class SetController {

    @Autowired
    private CardRepository cardRepository;

    @Autowired
    private SetRepository setRepository;

    @RequestMapping(value="/set", method = RequestMethod.GET, produces="application/json")
    public SetContainer displaySet() {
        SetContainer setContainer = new SetContainer();
        if (setRepository.findById((long) 1).isPresent()) {
            Set set = setRepository.findById((long) 1).get();
            setContainer.setId(set.getId());
            setContainer.setDescription(set.getDescription());
            setContainer.setCards(set.getCards());
            setContainer.setName(set.getName());

        }
        return setContainer;
    }
}
