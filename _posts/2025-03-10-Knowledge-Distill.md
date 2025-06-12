---
layout: post
title: Knowledge Distill
date: 2025-03-10
description: Intro to LLM
tags: math
categories: LLM
related_posts: false
---

> I couldn’t reduce it to the freshman level. That means we really don’t understand it
> — Richard Feynman

Imagine you're a great chef :cook: with a special recipe you've worked on for many years. Your helper wants to learn from you, but the recipe is complicated. Instead of teaching every tiny step, you share the main points in a simple way. This way of teaching complicated ideas in a clear, easy way is similar to what we call **model distillation** in artificial intelligence (AI).

Just as alcohol distillation isn't simply reduction, but a purification process, model distillation isn't simply shrinking models, but a process of extracting and **transferring** knowledge.

## Why is Model Distillation Important?

Some AI models are huge, with trillions of parameters. These big models, like the ones used for apps like ChatGPT, are very smart but hard to run on regular phones or laptops because they need a lot of power. Model distillation lets us shrink these big models into smaller ones that can run easily on everyday devices.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/model_distll.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Knowledge Distillation Process
</div>

## How Does Large Model Distillation Work?

Looking at the parallel relationship:

- Chemical distillation: :test_tube: Mixed substance → :fire: Heating → :dash: Vaporization → :snowflake: Cooling → :droplet: Pure liquid
- Model distillation: :teacher: Large model → :gear: Training → :bulb: Knowledge extraction → :arrows_counterclockwise: Conversion → :student: Small model

1: First, we have a "teacher model" :teacher: —possibly a large model like Deepseek R1 or ChatGPT o1.

2: Then, we prepare a "student model" :student: that has much smaller parameters.

3: The distillation process begins

We collect large amounts of training data, and the teacher model will respond to this data, producing "soft labels," which contain not only correct answers, but also the model's judgments about other possible answers.

4: Learning process

The student model simultaneously learns the original correct answers ("hard labels") and the teacher model's judgments ("soft labels"), so the student model learns **not only how to respond but also understands why respond this way**.

