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

Imagine you're an experienced chef :cook: holding an extremly complex recipe(this is like a LLM). Now you want to teach your apprentice the essence of this recipe. Instead of teaching them step-by-step by letting them know all the details and hardship you've gone thorugh. This is the insight of **knowledge distillation** -- condensing the "knowledge" from a massive model into a smaller one.

Just as alcohol distillation isn't simply reduction, but a purification process, model distillation isn't simply shrinking models, but a process of extracting and **transferring** knowledge.

## Why Do We Need Model Distillation?

Think about it, current large language models typically have hundreds of billions(GPT 3.5) to trillions of parameters(GPT 4), like a library full of knowledge. While they're capable of amazing things, running them on ordinary devices isn't easy — it's like you can't bring the entire library home, but you can **condense the most important knowledge into a handbook**. 

## How Does Large Model Distillation Work?

Looking at the process relationship:
- Chemical distillation: Mixed substance → Heating → Vaporization → Cooling → Pure liquid
- Model distillation: Large model → Training → Knowledge extraction → Conversion → Small model

1: First, we have a "teacher model"—possibly a large model like Deepseek R1 or ChatGPT o1.

2: Then, we prepare a "student model" that has much smaller parameters.

3: The distillation process begins

We collect large amounts of training data, and the teacher model will respond to this data, producing "soft labels," which contain not only correct answers, but also the model's judgments about other possible answers.

4: Learning process

The student model simultaneously learns the original correct answers ("hard labels") and the teacher model's judgments ("soft labels"), so the student model learns **not only how to respond but also understands why respond this way**.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/distill.jpeg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Knowledge Distillation Process
</div>