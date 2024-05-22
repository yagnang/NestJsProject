import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateVariantTeble1716370485561 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "variant",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    length: "255",
                    isPrimary: true,
                    isNullable: false,
                    default: "uuid_generate_v4()"
                },
                {
                    name: "name_lang",
                    type: "json",
                    isNullable: false,
                    default: "'{}'::json"
                },
                {
                    name: "data_area",
                    type: "varchar",
                    length: "255",
                    isNullable: true
                },
                {
                    name: "description",
                    type: "json",
                    isNullable: true,
                    default: "'{}'::json"
                },
                {
                    name: "type",
                    type: "bit",
                    length: "1",
                    isNullable: true
                },
                {
                    name: "active",
                    type: "boolean",
                    isNullable: true
                },
                {
                    name: "created_by",
                    type: "varchar",
                    length: "128",
                    isNullable: false,
                    default: "'system'"
                },
                {
                    name: "created_on",
                    type: "timestamp",
                    isNullable: false,
                    default: "now()"
                },
                {
                    name: "updated_by",
                    type: "varchar",
                    length: "128",
                    isNullable: false,
                    default: "'system'"
                },
                {
                    name: "updated_on",
                    type: "timestamp",
                    isNullable: false,
                    default: "now()"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("variant");
    }

}
