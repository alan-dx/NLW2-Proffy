import Knex from 'knex';
//CALENDÁRIO DAS CLASSES, O HORÁRIO QUE DETERMINADO PROFESSOR DA AQUELA AULA
export async function  up(knex: Knex) {
    return knex.schema.createTable("class_schedule", table => {
        table.increments('id').primary();
        
        table.integer("week_day").notNullable();
        table.integer("from").notNullable();
        table.integer("to").notNullable();

        table.integer('class_id')//id da classe
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}