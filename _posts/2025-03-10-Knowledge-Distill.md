---
layout: post
title: "Knowledge Distillation: putting AI Giants in Your Pocket"
date: 2025-03-10
description: Intro to LLM
tags: math
categories: LLM
related_posts: false
---

## Introduction

Imagine you're a great chef :cook: with a special recipe you've worked on for many years. Your helper wants to learn from you, but the recipe is complicated. Instead of teaching every tiny step, you share the main points in a simple way. This approach to teaching complex concepts is similar to what we call **model distillation** in Artificial Intelligence (AI).

Just as alcohol distillation isn't about reducing volume, but about purifying a substance, model distillation isn't simply shrinking models, but a process of extracting and **transferring** knowledge.

## Why is Model Distillation Important?

Most AI models are huge, with trillions (like millions of millions) of parameters. These big models, like the ones used for apps like ChatGPT, are very smart but difficult to run on regular laptops because they need a lot of power. Model distillation lets us shrink these big models into smaller ones that can **run easily on everyday devices**.


<div class="row mt-3">
    <div class="col-sm-6">
        {% include figure.liquid loading="eager" path="assets/img/deepseek.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm-6">
        <h3>Don't be fooled by size!</h3>
        In the left picture, we can see 
        <ul>
            <li>The teacher model is <code>Deepseek-R1-0528</code>, one of the frontier models. 
            </li>
            <li>The distilled model is <code>Deepseek-R1-0528-Qwen3-8B</code>, being <b>100 times smaller</b> than the teacher model, and can be deployed in a PC.  
            </li>
            <li>Despite being significantly smaller, <code>Deepseek-R1-0528-Qwen3-8B</code> still achieves good performance, even compared to other frontier models. 
            </li>
        </ul>
    </div>
</div>



Also, because the student model is small, it needs much less electricity to think(great for the earth!). Smaller also means cheaper, so more people can play with it on laptops and even cellphones instead of mega-servers that cover areas comparable to football stadiums. 

--- 

<div class="row mt-3">
    <div class="col-sm-6">
        {% include figure.liquid loading="eager" path="assets/img/model_distill.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
        <div class="caption">
            Knowledge Distillation Process
        </div>
    </div>
    <div class="col-sm-6">
        <h2>How Does Large Model Distillation Work?</h2>
        <p>It's inspired by the chemical distillation process and has the following parallel relationship:</p>
        <ul>
            <li>Chemical distillation: :test_tube: Mixed substance → :fire: Heating → :dash: Vaporization → :snowflake: Cooling → :droplet: Pure liquid</li>
            <li>Model distillation: :teacher: Large model → :gear: Training → :bulb: Knowledge extraction → :arrows_counterclockwise: Conversion → :student: Small model</li>
        </ul>
    </div>
</div>


Here's what it means for each step:

- Teacher AI Model 🧑‍🏫: This is a big AI model, like ChatGPT, that knows a lot and gives very detailed answers.
- Student AI Model 🎓: This is a smaller model made to work quickly on phones and computers.
- Training and Knowledge Transfer 🔄: The teacher AI looks at lots of data and gives the correct answers and explains why these answers are correct.
- Learning Process 📚: The student AI learns both the correct answers and the reasoning behind them. This helps the student AI give good answers even though it is smaller.

--- 

## Take-away: Distillation is an Apprenticeship
Model distillation is like an apprenticeship, where the student learns directly from the teacher, step by step. Just as an apprentice chef learns cooking skills by watching and following closely as the experienced chef prepares dishes, the smaller AI model learns key concepts directly from the larger, knowledgeable AI model.

## Conclusion 
Through model distillation, we demonstrate a way to make **Large** AI models more accessible, efficient, and widely usable, not just those with access to massive computing resources.  

